import api from "@/oneentry";

export async function fetchMenuItems(marker: string) {
    try {
        const menus = await api.Menus.getMenusByMarker(marker)
        return menus
    } catch (error) {
        console.log("Database Error", error)
        throw new Error("Failed to fetch menu items")
    }
}