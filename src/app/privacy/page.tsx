import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> 7/25/25
            </p>
            
            <p className="mb-6">
              Connect Digital Inclusion Labs ("CDIL," "we," "us," or "our") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and protect information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">
              We do not collect, store, or track any personal information through our website. Our website is purely informational and does not use:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Contact forms</li>
              <li>Email signup lists</li>
              <li>Analytics tracking</li>
              <li>Cookies (except those required for basic website functionality)</li>
            </ul>
            <p className="mb-6">
              If you contact us directly via email or phone using the contact information provided on our website, 
              that communication is handled outside of our website and follows standard email/phone privacy practices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-6">
              Since we don't collect information through our website, there is no data for us to use, share, or store.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing</h2>
            <p className="mb-6">
              We do not collect personal information, so there is nothing to share with third parties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p className="mb-6">
              Since we do not collect or store personal information through our website, there are no data security concerns related to our website operations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p className="mb-6">
              As we do not collect personal information through our website, there is no personal data for you to access, correct, or delete.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
            <p className="mb-6">
              Our services are intended for general audiences. We do not knowingly collect personal information from children under 13 without parental consent.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy occasionally. Changes will be posted on this page with a new effective date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <ul className="list-none mb-6">
              <li className="mb-2">Email: info@cdil.org</li>
              <li className="mb-2">Address: Lafayette, Colorado area</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;