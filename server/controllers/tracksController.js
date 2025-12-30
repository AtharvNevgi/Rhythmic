import {supabase} from "../config/supabaseClient.js";

export const getTracks = async (req, res) => {
    try {
        const {data, error} = await supabase.from("tracks").select("*");
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}