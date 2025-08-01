import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> 7/25/25
            </p>
            
            <p className="mb-6">
              Welcome to Connect Digital Inclusion Labs ("CDIL"). By using our website and services, you agree to these Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">About Our Services</h2>
            <p className="mb-4">
              CDIL is a nonprofit organization serving the Lafayette, Colorado area that provides:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>One on one tech help</li>
              <li>Technology access and support</li>
              <li>Community outreach programs</li>
            </ul>
            <p className="mb-6">
              Our website is purely informational and does not collect user data or require account creation.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use of Our Website</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Acceptable Use</h3>
            <p className="mb-4">You may use our website and services for lawful purposes only. You agree not to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Use our services for any illegal activities</li>
              <li>Interfere with the website's functionality</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Harass or harm other users or staff</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Content</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>All content on our website is for informational purposes</li>
              <li>We strive for accuracy but make no guarantees about the completeness of information</li>
              <li>You may not reproduce our content without permission</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Services</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Availability</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Services are provided on a volunteer basis and subject to availability</li>
              <li>We reserve the right to modify or discontinue services at any time</li>
              <li>We cannot guarantee uninterrupted access to our services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Liability</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Our services are provided "as is"</li>
              <li>We are not liable for any damages resulting from use of our services</li>
              <li>Our total liability is limited to the amount you paid for services (if any)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>CDIL owns the content and materials on our website</li>
              <li>You may not use our trademarks or logos without permission</li>
              <li>We respect others' intellectual property rights</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Privacy</h2>
            <p className="mb-6">
              Your privacy is important to us. Please review our Privacy Policy to understand how we handle your information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Modifications</h2>
            <p className="mb-6">
              We may update these Terms of Service at any time. Continued use of our services constitutes acceptance of any changes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p className="mb-6">
              These terms are governed by the laws of Colorado. Any disputes will be resolved in the courts of Colorado.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="mb-4">Questions about these Terms of Service? Contact us:</p>
            <ul className="list-none mb-6">
              <li className="mb-2">Email: info@cdil.org</li>
              <li className="mb-2">Address: Lafayette, Colorado area</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Effective Date</h2>
            <p className="mb-6">
              These Terms of Service are effective as of 7/25/25 and will remain in effect until modified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;