import { contacts, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private currentId: number;

  constructor() {
    this.contacts = new Map();
    this.currentId = 1;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const newContact = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
