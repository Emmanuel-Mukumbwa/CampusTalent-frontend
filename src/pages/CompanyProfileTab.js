// CompanyProfileTab.js
import React, { useState } from 'react';

const CompanyProfileTab = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: 'TechCorp',
    description: 'A leading software development company.',
    contact: {
      email: '',
      phone: '',
      website: '',
      address: '',
    },
    logo: null,
    banner: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prev) => ({
      ...prev,
      contact: { ...prev.contact, [name]: value },
    }));
  };

  const handleLogoUpload = (e) => {
    setCompanyInfo((prev) => ({
      ...prev,
      logo: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleBannerUpload = (e) => {
    setCompanyInfo((prev) => ({
      ...prev,
      banner: URL.createObjectURL(e.target.files[0]),
    }));
  };

  return (
    <div>
      <h5>Company Profile</h5>
      <div className="mb-3">
        <label className="form-label">Company Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={companyInfo.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          className="form-control"
          value={companyInfo.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Upload Logo</label>
        <input type="file" className="form-control" onChange={handleLogoUpload} accept="image/*" />
        {companyInfo.logo && (
          <img src={companyInfo.logo} alt="Logo" className="img-fluid mt-2" style={{ maxWidth: '150px' }} />
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Upload Banner</label>
        <input type="file" className="form-control" onChange={handleBannerUpload} accept="image/*" />
        {companyInfo.banner && (
          <img src={companyInfo.banner} alt="Banner" className="img-fluid mt-2" />
        )}
      </div>
      <h6>Contact Information</h6>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={companyInfo.contact.email}
          onChange={handleContactChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          value={companyInfo.contact.phone}
          onChange={handleContactChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Website</label>
        <input
          type="text"
          name="website"
          className="form-control"
          value={companyInfo.contact.website}
          onChange={handleContactChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          name="address"
          className="form-control"
          value={companyInfo.contact.address}
          onChange={handleContactChange}
        />
      </div>
    </div>
  );
};

export default CompanyProfileTab;
