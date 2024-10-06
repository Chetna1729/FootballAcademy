export const contact = async (req, res) => {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
}