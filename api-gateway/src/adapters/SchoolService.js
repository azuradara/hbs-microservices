import got from 'got';

const SCHOOL_SERVICE_URI = 'http://school-service:7100';

export default class SchoolService {
  /** STUDENTS */
  static async fetchAllStudents() {
    const body = await got.get(`${SCHOOL_SERVICE_URI}/students`).json();
    return body;
  }

  static async fetchModulesByStudent({ studentId }) {
    const body = await got
      .get(`${SCHOOL_SERVICE_URI}/students/${studentId}/modules`)
      .json();

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

  static async updateStudent(payload) {
    const body = await got
      .put(`${SCHOOL_SERVICE_URI}/students/${payload.studentId}`, {
        json: { ...payload },
      })
      .json();

    return body;
  }

  static async deleteStudent({ studentId }) {
    await got.delete(`${SCHOOL_SERVICE_URI}/students/${studentId}`).json();

    return true;
  }

  /** PROFESSORS */
  static async fetchAllProfessors() {
    const body = await got.get(`${SCHOOL_SERVICE_URI}/professors`).json();
    return body;
  }

  static async fetchModulesByProfessor({ professorId }) {
    const body = await got
      .get(`${SCHOOL_SERVICE_URI}/professors/${professorId}/modules`)
      .json();

    return body;
  }

  static async createProfessor({ fullName, matricule, registrationDate }) {
    const body = await got
      .post(`${SCHOOL_SERVICE_URI}/professors`, {
        json: { fullName, matricule, registrationDate },
      })
      .json();

    return body;
  }

  static async updateProfessor(payload) {
    const body = await got
      .put(`${SCHOOL_SERVICE_URI}/professors/${payload.professorId}`, {
        json: { ...payload },
      })
      .json();

    return body;
  }

  static async deleteProfessor({ professorId }) {
    await got.delete(`${SCHOOL_SERVICE_URI}/professors/${professorId}`).json();

    return true;
  }

  /** MODULES */
  static async fetchAllModules() {
    const body = await got.get(`${SCHOOL_SERVICE_URI}/modules`).json();
    return body;
  }

  static async createModule(payload) {
    const body = await got
      .post(`${SCHOOL_SERVICE_URI}/modules`, {
        json: { ...payload },
      })
      .json();

    return body;
  }

  static async deleteModule({ moduleId }) {
    await got.delete(`${SCHOOL_SERVICE_URI}/modules/${moduleId}`).json();

    return true;
  }

  static async updateModule(payload) {
    const body = await got
      .put(`${SCHOOL_SERVICE_URI}/modules/${payload.moduleId}`, {
        json: { ...payload },
      })
      .json();

    return body;
  }

  /** JUNCTIONS */
  static async createJunction({ studentId, moduleId }) {
    const body = await got
      .post(`${SCHOOL_SERVICE_URI}/modules/${moduleId}/students/${studentId}`)
      .json();

    return body;
  }

  static async deleteJunction({ studentId, moduleId }) {
    await got
      .delete(`${SCHOOL_SERVICE_URI}/modules/${moduleId}/students/${studentId}`)
      .json();

    return true;
  }
}
