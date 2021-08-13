import got from 'got';

const SCHOOL_SERVICE_URI = 'http://school-service:7100';

export default class SchoolService {
  /** STUDENTS */
  static async fetchAllStudents() {
    const body = await got.get(`${SCHOOL_SERVICE_URI}/students`).json();
    return body;
  }

  static async createStudent({
    fullName,
    cin,
    birthDate,
    registrationDate,
    branch,
  }) {
    const body = await got
      .post(`${SCHOOL_SERVICE_URI}/students`, {
        json: { fullName, cin, birthDate, registrationDate, branch },
      })
      .json();

    return body;
  }

  /** PROFESSORS */
  static async fetchAllProfessors() {
    const body = await got.get(`${SCHOOL_SERVICE_URI}/professors`).json();
    return body;
  }

  /** MODULES */
  static async fetchAllModules() {
    const body = await got.get(`${SCHOOL_SERVICE_URI}/modules`).json();
    return body;
  }

  static async fetchModulesByStudent({ studentId }) {
    const body = await got
      .get(`${SCHOOL_SERVICE_URI}/students/${studentId}/modules`)
      .json();

    return body;
  }
}
