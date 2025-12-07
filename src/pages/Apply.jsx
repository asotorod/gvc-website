import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import api from '../services/api'
import './Apply.css'

function Apply() {
  const [searchParams] = useSearchParams();
  const preSelectedPosition = searchParams.get('position') || '';
  
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    // Personal Info
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'NY',
    zip: '',
    
    // Position
    position: preSelectedPosition,
    availability: 'full-time',
    desired_start_date: '',
    experience_years: '',
    
    // CDL Info
    has_cdl: false,
    cdl_class: '',
    cdl_expiration: '',
    
    // Files
    license_front: null,
    license_back: null,
    resume: null,
    
    // Additional
    references_info: '',
    how_heard: '',
    additional_info: ''
  });

  const positions = [
    { id: 'driver', title: 'School Bus Driver' },
    { id: 'attendant', title: 'Bus Attendant' },
    { id: 'mechanic', title: 'Mechanic' },
    { id: 'dispatcher', title: 'Dispatcher' },
    { id: 'other', title: 'Other' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateStep = (stepNum) => {
    switch (stepNum) {
      case 1:
        if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone) {
          setError('Please fill in all required fields');
          return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          setError('Please enter a valid email address');
          return false;
        }
        break;
      case 2:
        if (!formData.position) {
          setError('Please select a position');
          return false;
        }
        break;
      case 3:
        if (!formData.license_front) {
          setError('Please upload the front of your driver\'s license');
          return false;
        }
        break;
      default:
        break;
    }
    setError('');
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(step)) return;
    
    setSubmitting(true);
    setError('');

    try {
      const submitData = new FormData();
      
      // Append all text fields
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '' && !['license_front', 'license_back', 'resume'].includes(key)) {
          submitData.append(key, formData[key]);
        }
      });

      // Append files
      if (formData.license_front) {
        submitData.append('license_front', formData.license_front);
      }
      if (formData.license_back) {
        submitData.append('license_back', formData.license_back);
      }
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      await api.submitApplication(submitData);
      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err.response?.data?.message || 'Error submitting application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="apply-page">
        <section className="page-hero apply-hero">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <h1>Application Submitted!</h1>
            <p>Thank you for your interest in joining GVC School Bus</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Thank You!</h2>
              <p>Your application has been received. Our HR team will review your application and contact you within 3-5 business days.</p>
              <p>If you have any questions, please contact us at <a href="mailto:hr@gvcbus.com">hr@gvcbus.com</a> or call <a href="tel:7185555555">(718) 555-5555</a>.</p>
              <Link to="/careers" className="btn btn-primary">Back to Careers</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <section className="page-hero apply-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Employment Application</h1>
          <p>Start your career with GVC School Bus</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Progress Steps */}
          <div className="progress-steps">
            <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="step-number">1</div>
              <span>Personal Info</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="step-number">2</div>
              <span>Position</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
              <div className="step-number">3</div>
              <span>Documents</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>
              <div className="step-number">4</div>
              <span>Review</span>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="application-form">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="form-step">
                <h2>Personal Information</h2>
                <p className="step-description">Please provide your contact details</p>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first_name">First Name *</label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last_name">Last Name *</label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(718) 555-5555"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Street Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row form-row-3">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option value="NY">New York</option>
                      <option value="NJ">New Jersey</option>
                      <option value="CT">Connecticut</option>
                      <option value="PA">Pennsylvania</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip">ZIP Code</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      maxLength="10"
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={nextStep} className="btn btn-primary">
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Position & Experience */}
            {step === 2 && (
              <div className="form-step">
                <h2>Position & Experience</h2>
                <p className="step-description">Tell us about the position you're applying for</p>

                <div className="form-group">
                  <label htmlFor="position">Position Applying For *</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a position...</option>
                    {positions.map(pos => (
                      <option key={pos.id} value={pos.id}>{pos.title}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="availability">Availability</label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                    >
                      <option value="full-time">Full-Time</option>
                      <option value="part-time">Part-Time</option>
                      <option value="either">Either</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="desired_start_date">Desired Start Date</label>
                    <input
                      type="date"
                      id="desired_start_date"
                      name="desired_start_date"
                      value={formData.desired_start_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="experience_years">Years of Driving Experience</label>
                  <input
                    type="number"
                    id="experience_years"
                    name="experience_years"
                    value={formData.experience_years}
                    onChange={handleChange}
                    min="0"
                    max="50"
                  />
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="has_cdl"
                      checked={formData.has_cdl}
                      onChange={handleChange}
                    />
                    <span>I have a Commercial Driver's License (CDL)</span>
                  </label>
                </div>

                {formData.has_cdl && (
                  <div className="form-row cdl-fields">
                    <div className="form-group">
                      <label htmlFor="cdl_class">CDL Class</label>
                      <select
                        id="cdl_class"
                        name="cdl_class"
                        value={formData.cdl_class}
                        onChange={handleChange}
                      >
                        <option value="">Select class...</option>
                        <option value="A">Class A</option>
                        <option value="B">Class B</option>
                        <option value="C">Class C</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cdl_expiration">CDL Expiration Date</label>
                      <input
                        type="date"
                        id="cdl_expiration"
                        name="cdl_expiration"
                        value={formData.cdl_expiration}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  <button type="button" onClick={prevStep} className="btn btn-outline">
                    ← Back
                  </button>
                  <button type="button" onClick={nextStep} className="btn btn-primary">
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Documents */}
            {step === 3 && (
              <div className="form-step">
                <h2>Documents</h2>
                <p className="step-description">Upload required documents for your application</p>

                <div className="upload-section">
                  <h3>Driver's License *</h3>
                  <p>Please upload clear photos of the front and back of your driver's license</p>
                  
                  <div className="form-row">
                    <div className="form-group upload-group">
                      <label htmlFor="license_front" className="upload-label">
                        <div className="upload-box">
                          {formData.license_front ? (
                            <div className="upload-preview">
                              <span className="upload-icon">✓</span>
                              <span>{formData.license_front.name}</span>
                            </div>
                          ) : (
                            <>
                              <span className="upload-icon">📄</span>
                              <span>Front of License *</span>
                              <small>Click to upload</small>
                            </>
                          )}
                        </div>
                        <input
                          type="file"
                          id="license_front"
                          name="license_front"
                          accept="image/*,.pdf"
                          onChange={handleChange}
                          className="file-input"
                        />
                      </label>
                    </div>
                    <div className="form-group upload-group">
                      <label htmlFor="license_back" className="upload-label">
                        <div className="upload-box">
                          {formData.license_back ? (
                            <div className="upload-preview">
                              <span className="upload-icon">✓</span>
                              <span>{formData.license_back.name}</span>
                            </div>
                          ) : (
                            <>
                              <span className="upload-icon">📄</span>
                              <span>Back of License</span>
                              <small>Click to upload</small>
                            </>
                          )}
                        </div>
                        <input
                          type="file"
                          id="license_back"
                          name="license_back"
                          accept="image/*,.pdf"
                          onChange={handleChange}
                          className="file-input"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="upload-section">
                  <h3>Resume (Optional)</h3>
                  <p>Upload your resume if you have one</p>
                  
                  <div className="form-group upload-group">
                    <label htmlFor="resume" className="upload-label">
                      <div className="upload-box">
                        {formData.resume ? (
                          <div className="upload-preview">
                            <span className="upload-icon">✓</span>
                            <span>{formData.resume.name}</span>
                          </div>
                        ) : (
                          <>
                            <span className="upload-icon">📎</span>
                            <span>Resume / CV</span>
                            <small>PDF, DOC, or DOCX</small>
                          </>
                        )}
                      </div>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="file-input"
                      />
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="references_info">Professional References</label>
                  <textarea
                    id="references_info"
                    name="references_info"
                    value={formData.references_info}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Please provide 2-3 professional references with their contact information"
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={prevStep} className="btn btn-outline">
                    ← Back
                  </button>
                  <button type="button" onClick={nextStep} className="btn btn-primary">
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <div className="form-step">
                <h2>Review & Submit</h2>
                <p className="step-description">Please review your application before submitting</p>

                <div className="review-section">
                  <h3>Personal Information</h3>
                  <div className="review-grid">
                    <div className="review-item">
                      <label>Name</label>
                      <span>{formData.first_name} {formData.last_name}</span>
                    </div>
                    <div className="review-item">
                      <label>Email</label>
                      <span>{formData.email}</span>
                    </div>
                    <div className="review-item">
                      <label>Phone</label>
                      <span>{formData.phone}</span>
                    </div>
                    <div className="review-item">
                      <label>Address</label>
                      <span>{formData.address ? `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}` : 'Not provided'}</span>
                    </div>
                  </div>
                </div>

                <div className="review-section">
                  <h3>Position Details</h3>
                  <div className="review-grid">
                    <div className="review-item">
                      <label>Position</label>
                      <span>{positions.find(p => p.id === formData.position)?.title || formData.position}</span>
                    </div>
                    <div className="review-item">
                      <label>Availability</label>
                      <span>{formData.availability}</span>
                    </div>
                    <div className="review-item">
                      <label>Experience</label>
                      <span>{formData.experience_years ? `${formData.experience_years} years` : 'Not specified'}</span>
                    </div>
                    <div className="review-item">
                      <label>CDL</label>
                      <span>{formData.has_cdl ? `Yes - Class ${formData.cdl_class}` : 'No'}</span>
                    </div>
                  </div>
                </div>

                <div className="review-section">
                  <h3>Documents</h3>
                  <div className="review-grid">
                    <div className="review-item">
                      <label>License (Front)</label>
                      <span>{formData.license_front ? '✓ Uploaded' : '✗ Not uploaded'}</span>
                    </div>
                    <div className="review-item">
                      <label>License (Back)</label>
                      <span>{formData.license_back ? '✓ Uploaded' : 'Not uploaded'}</span>
                    </div>
                    <div className="review-item">
                      <label>Resume</label>
                      <span>{formData.resume ? '✓ Uploaded' : 'Not uploaded'}</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="how_heard">How did you hear about us?</label>
                  <select
                    id="how_heard"
                    name="how_heard"
                    value={formData.how_heard}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    <option value="indeed">Indeed</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="facebook">Facebook</option>
                    <option value="referral">Employee Referral</option>
                    <option value="website">Company Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="additional_info">Additional Information</label>
                  <textarea
                    id="additional_info"
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Is there anything else you'd like us to know?"
                  ></textarea>
                </div>

                <div className="disclaimer">
                  <p>By submitting this application, I certify that all information provided is true and complete to the best of my knowledge. I understand that any false statements may result in disqualification from employment or termination if already employed.</p>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={prevStep} className="btn btn-outline">
                    ← Back
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Apply
