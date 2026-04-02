import React, { useState } from 'react';
import { upcomingEvents } from '../mockData';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1
  });

  const handleReservation = (event) => {
    setSelectedEvent(event);
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      guests: event.minGuests || 1
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate minimum guests
    if (selectedEvent?.minGuests && formData.guests < selectedEvent.minGuests) {
      toast.error(`Minimum ${selectedEvent.minGuests} guests required for ${selectedEvent.title}`);
      return;
    }
    
    // Calculate total amount
    let totalAmount = 0;
    if (selectedEvent?.type === 'with-dining') {
      totalAmount = selectedEvent.minimumOrder || 1000;
    } else if (selectedEvent?.type === 'drinks-only') {
      totalAmount = selectedEvent.venueHire || 500;
    } else if (selectedEvent?.pricePerPerson) {
      totalAmount = selectedEvent.pricePerPerson * formData.guests;
    }
    
    // Prepare reservation data
    const reservationData = {
      eventId: selectedEvent.id,
      eventTitle: selectedEvent.title,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      guests: formData.guests,
      totalAmount: totalAmount
    };
    
    try {
      // Show loading state
      toast.loading('Creating reservation...');
      
      // Send to backend API
      const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await fetch(`${API_URL}/api/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || 'Failed to create reservation');
      }
      
      // Dismiss loading and show success
      toast.dismiss();
      
      // Show appropriate success message
      let message = '';
      if (selectedEvent?.type === 'with-dining') {
        message = `Reservation request received! ${selectedEvent.title} for ${formData.guests} guests. Confirmation emails sent. Our team will contact you to discuss the menu.`;
      } else if (selectedEvent?.type === 'drinks-only') {
        message = `Reservation request received! Venue hire £${selectedEvent.venueHire} for ${formData.guests} guests. Confirmation emails sent. Our team will contact you to discuss drinks packages.`;
      } else if (selectedEvent?.pricePerPerson) {
        const total = (selectedEvent.pricePerPerson * formData.guests).toFixed(2);
        message = `Reservation confirmed! ${selectedEvent.title} for ${formData.guests} guest(s). Total: £${total}. Check your email for confirmation!`;
      }
      
      toast.success(message, { duration: 5000 });
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        guests: selectedEvent?.minGuests || 1
      });
      setIsDialogOpen(false);
      setSelectedEvent(null);
      
    } catch (error) {
      toast.dismiss();
      toast.error(`Failed to create reservation: ${error.message}. Please try again or call us directly.`);
      console.error('Reservation error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Events
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Workshops & <span className="text-blue-700">Special Events</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us for cooking classes, coffee tastings, and special themed events
          </p>
        </div>

        {/* Info Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Event Times
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p>🫖 <strong>Afternoon Tea:</strong> Daily from 14:00 (2 PM) - Min 2 guests</p>
                  <p>🍽️ <strong>Private Event with Dining:</strong> Daily from 17:00 (5 PM) - Min order £1000</p>
                  <p>🍸 <strong>Venue Hire (Drinks Only):</strong> Daily from 17:00 (5 PM) - £500 hire fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden border-2 hover:border-amber-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white font-semibold">
                      {event.price}
                    </Badge>
                  </div>
                  {event.availableSeats <= 5 && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white hover:bg-red-600">
                        Only {event.availableSeats} Left!
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 mr-2 text-amber-600" />
                    <span className="text-sm font-medium">
                      {event.date === "Daily" ? "Available Daily" : new Date(event.date).toLocaleDateString('en-US', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-amber-600" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-4 h-4 mr-2 text-amber-600" />
                    <span className="text-sm font-medium">
                      Book for {event.minGuests}+ guests
                    </span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button 
                  onClick={() => handleReservation(event)}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                  disabled={event.availableSeats === 0}
                >
                  {event.availableSeats === 0 ? 'Sold Out' : 'Book Now'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Event Gallery */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Past <span className="text-blue-700">Event Highlights</span>
            </h3>
            <p className="text-gray-600 text-lg">
              Take a look at some memorable moments from our previous events
            </p>
          </div>
          
          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[
              { url: 'https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/y6b6ycs8_event%20pic1.jpeg', alt: 'Event highlight 1' },
              { url: 'https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/hw8yabsk_event%20pic%202.jpeg', alt: 'Event highlight 2' },
              { url: 'https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/5m8eo83i_event%20pic%203.jpeg', alt: 'Event highlight 3' },
              { url: 'https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/c149g31s_event%20pic%204.jpeg', alt: 'Event highlight 4' },
              { url: 'https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/m48tvblz_event%20pic%205%20.jpeg', alt: 'Event highlight 5' }
            ].map((photo, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group aspect-square"
              >
                <img 
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Video Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { url: 'https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/oh5j1iyq_event%20video%201.mp4', title: 'Event Video 1' },
              { url: 'https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/mows434j_event%20vido%202.mp4', title: 'Event Video 2' },
              { url: 'https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/9v2mx36y_event%20video%203.mp4', title: 'Event Video 3' },
              { url: 'https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/kucgmz9q_event%20video%204.mp4', title: 'Event Video 4' }
            ].map((video, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gray-900"
              >
                <video 
                  src={video.url}
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  playsInline
                  preload="metadata"
                  poster=""
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reservation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Event Reservation</DialogTitle>
            <DialogDescription>
              {selectedEvent?.title} - {selectedEvent?.date === "Daily" ? "Daily from 2 PM" : selectedEvent && new Date(selectedEvent.date).toLocaleDateString('en-US')}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="+44 1233 368261"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests *
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                {[...Array(Math.min(selectedEvent?.maxGuests || 10, selectedEvent?.availableSeats || 10))].map((_, i) => {
                  const guestCount = i + 1;
                  const minGuests = selectedEvent?.minGuests || 1;
                  if (guestCount < minGuests) return null;
                  return (
                    <option key={guestCount} value={guestCount}>
                      {guestCount} Guest{guestCount > 1 ? 's' : ''}
                    </option>
                  );
                })}
              </select>
              {selectedEvent?.minGuests > 1 && (
                <p className="text-xs text-gray-500 mt-1">
                  Minimum {selectedEvent.minGuests} guests required
                </p>
              )}
              {selectedEvent?.maxGuests && (
                <p className="text-xs text-gray-500 mt-1">
                  Maximum capacity: {selectedEvent.maxGuests} guests
                </p>
              )}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              {selectedEvent?.type === 'with-dining' ? (
                <div>
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="font-semibold">Minimum Order:</span> £{selectedEvent.minimumOrder}
                  </p>
                  <p className="text-xs text-gray-600">
                    Food & drinks menu will be discussed with our team based on your requirements
                  </p>
                </div>
              ) : selectedEvent?.type === 'drinks-only' ? (
                <div>
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="font-semibold">Venue Hire:</span> £{selectedEvent.venueHire}
                  </p>
                  <p className="text-xs text-gray-600">
                    Drinks packages available separately - our team will discuss options with you
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Total Amount:</span>{' '}
                    £{selectedEvent && selectedEvent.pricePerPerson 
                      ? (selectedEvent.pricePerPerson * formData.guests).toFixed(2)
                      : '0.00'
                    }
                  </p>
                  {selectedEvent?.title === "Afternoon Tea" && (
                    <p className="text-xs text-gray-600 mt-1">
                      £33 for 2 people (£{selectedEvent.pricePerPerson}/person for additional guests)
                    </p>
                  )}
                </div>
              )}
            </div>

            <DialogFooter className="flex space-x-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
              >
                {selectedEvent?.type === 'afternoon-tea' ? 'Book Now' : 'Request Booking'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Events;
