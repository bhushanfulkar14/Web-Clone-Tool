import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const internshipApplicationsTable = pgTable("internship_applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  college: text("college").notNull(),
  year: text("year").notNull(),
  domain: text("domain").notNull(),
  skills: text("skills").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertInternshipApplicationSchema = createInsertSchema(
  internshipApplicationsTable
).omit({ id: true, createdAt: true });

export type InsertInternshipApplication = z.infer<
  typeof insertInternshipApplicationSchema
>;
export type InternshipApplication =
  typeof internshipApplicationsTable.$inferSelect;
