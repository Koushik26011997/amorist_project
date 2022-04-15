export class UserDetails {
  userId = "";
  token = "";
  name = "";
  email = "";
  phone = "";
  gender = "";
  dob = ""
  status = "";
  app_api_key = "";
  device_token = "";

  constructor(data) {
    this.userId = data.userId || '';
    this.token = data.token || '';
    this.name = data.name || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.gender = data.gender || '';
    this.dob = data.dob || '';
    this.status = data.status || '';
    this.app_api_key = data.app_api_key || '';
    this.device_token = data.device_token || '';
  }
}

