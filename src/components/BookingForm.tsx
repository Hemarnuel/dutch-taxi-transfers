'use client'

import { FormEvent, useState } from 'react'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      pickup: formData.get('pickup'),
      dropoff: formData.get('dropoff'),
      date: formData.get('date'),
      time: formData.get('time'),
      passengers: formData.get('passengers'),
      _subject: 'New Taxi Booking Request',
      _template: 'table',
    }

    try {
      const response = await fetch('https://formspree.io/f/meojeqlk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Failed to submit. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          ✓ Booking submitted successfully! We&apos;ll confirm via email shortly.
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="+31 20 308 6885"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Number of Passengers *
          </label>
          <select
            name="passengers"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select passengers</option>
            <option value="1">1 Passenger</option>
            <option value="2">2 Passengers</option>
            <option value="3">3 Passengers</option>
            <option value="4">4 Passengers</option>
            <option value="5+">5+ Passengers</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Pickup Location *
          </label>
          <input
            type="text"
            name="pickup"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Amsterdam Central Station"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Dropoff Location *
          </label>
          <input
            type="text"
            name="dropoff"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Schiphol Airport"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Date *
          </label>
          <input
            type="date"
            name="date"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Time *
          </label>
          <input
            type="time"
            name="time"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-secondary hover:bg-orange-600 text-primary font-bold py-3 px-6 rounded-lg transition disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Confirm Booking'}
      </button>
    </form>
  )
}
