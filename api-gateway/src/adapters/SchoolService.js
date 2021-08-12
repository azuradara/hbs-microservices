import got from 'got';

const SCHOOL_SERVICE_URI = 'http://school-service:7100';

export default class SchoolService {
  static async fetchAllStudents() {
    const body = await got.get(`${SCHOOL_SERVICE_URI}/students`).json();
    return body;
  }
}
