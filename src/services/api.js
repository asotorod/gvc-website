const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://gvc-portal-production.up.railway.app';

const api = {
  async getCompanyInfo() {
    const response = await fetch(`${API_BASE_URL}/api/public/company-info`);
    return response.json();
  },
  async getCareers() {
    const response = await fetch(`${API_BASE_URL}/api/public/careers`);
    return response.json();
  },
  async getGallery(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${API_BASE_URL}/api/public/gallery?${queryString}` : `${API_BASE_URL}/api/public/gallery`;
    const response = await fetch(url);
    return response.json();
  },
  async getGalleryLabels() {
    const response = await fetch(`${API_BASE_URL}/api/public/gallery/labels`);
    return response.json();
  },
  async getEvents(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${API_BASE_URL}/api/public/events?${queryString}` : `${API_BASE_URL}/api/public/events`;
    const response = await fetch(url);
    return response.json();
  },
  async getPageContent(page) {
    const response = await fetch(`${API_BASE_URL}/api/public/content/${page}`);
    return response.json();
  },
  async submitApplication(formData) {
    const response = await fetch(`${API_BASE_URL}/api/public/apply`, { method: 'POST', body: formData });
    return response.json();
  }
};

export default api;
