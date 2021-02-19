import HttpService from './HttpService';

class CustomerService {
  static sendCustomer(
    name,
    email,
  ) {
    const data = {
      "name": name,
      "email": email,
      "campaign": {
        "campaignId": "Ym"
      }
    }

    return HttpService.post('https://api.feitodeiridium.com.br/contacts', data);
  }
}

export default CustomerService;
