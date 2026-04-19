import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-rice-dark min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest uppercase mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 font-light">We'd love to hear from you. Fill out the form below.</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="space-y-6 bg-black p-8 border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">First Name</label>
              <input 
                required 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                className="w-full bg-rice-dark border border-gray-700 rounded-none px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Last Name</label>
              <input 
                required 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                className="w-full bg-rice-dark border border-gray-700 rounded-none px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Email *</label>
            <input 
              required 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full bg-rice-dark border border-gray-700 rounded-none px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Subject</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              className="w-full bg-rice-dark border border-gray-700 rounded-none px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Message *</label>
            <textarea 
              required 
              name="message" 
              rows="6" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full bg-rice-dark border border-gray-700 rounded-none px-4 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
            ></textarea>
          </div>

          <div className="pt-4 text-center">
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full md:w-auto px-12 py-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>
            {status === 'success' && <p className="mt-4 text-green-400">Message sent successfully!</p>}
            {status === 'error' && <p className="mt-4 text-red-500">Failed to send message. Please try again later.</p>}
          </div>
        </motion.form>
      </div>
    </div>
  );
}
