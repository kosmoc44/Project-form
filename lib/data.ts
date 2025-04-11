import api from "@/oneentry";

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
