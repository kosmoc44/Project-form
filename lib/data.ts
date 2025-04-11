import api from "@/oneentry";
import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";

export async function fetchMenuItems(marker: string) {
  try {
    const menus = await api.Menus.getMenusByMarker(marker);
    return menus;
  } catch (error) {
    console.log("Database Error", error);
    throw new Error("Failed to fetch menu items");
  }
}

export async function fetchAllForms() {
  try {
    const formsData = await api.Forms.getAllForms();

    const forms = Object.values(formsData)
      .map((form) => form)
      .sort((a, b) => b.position - a.position);

    return forms;
  } catch (error) {
    console.log("Database Error", error);
    throw new Error("Failed to fetch forms");
  }
}

export async function fetchFormById(id: string): Promise<IFormsEntity> {
  try {
    const formData = await api.Forms.getFormByMarker(id);
    return formData as IFormsEntity;
  } catch (error) {
    console.log("Database Error:", error);
    throw new Error("Failed to fetch form");
  }
}
