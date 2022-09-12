import http from "../http-common";
import IContact from "../types/contact.type";

class ContactService {
    getAll() {
        return http.get<Array<IContact>>('/contact');
    }

    get(id: string) {
        return http.get<Array<IContact>>(`/contact/${id}`);
    }

    create(data: IContact) {
        return http.post<IContact>("/contact", data);
    }

    update(data: IContact, id: any) {
        return http.put<Array<IContact>>(`/contact/${id}`, data);
    }

    delete(id: any) {
        return http.delete<Array<IContact>>(`/contact/${id}`);
    }
}

export default new ContactService();