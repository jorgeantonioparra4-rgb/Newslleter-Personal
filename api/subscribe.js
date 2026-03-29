export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'El email es obligatorio' });
  }

  const API_KEY = process.env.MAILERLITE_API_KEY;

  if (!API_KEY) {
    console.error('MAILERLITE_API_KEY no está configurada');
    return res.status(500).json({ error: 'Error de configuración del servidor' });
  }

  try {
    const payload = {
      email: email,
      groups: ["183316726755100119"],
    };

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('MailerLite API Error:', data);
      return res.status(400).json({ error: data.message || 'Error al suscribirse en MailerLite' });
    }

    return res.status(200).json({ success: true, message: '¡Suscripción exitosa!' });
  } catch (error) {
    console.error('Fetch error:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
