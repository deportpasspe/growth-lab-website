import type {PortableTextBlock} from '@portabletext/types'
import type {Locale} from '../i18n/routes'

const CONTACT_EMAIL = 'contacto@growthlab.pe'

function block(key: string, style: 'normal' | 'h3', text: string): PortableTextBlock {
  return {
    _type: 'block',
    _key: key,
    style,
    markDefs: [],
    children: [{_type: 'span', _key: `${key}-span`, text, marks: []}],
  }
}

const privacyBodyEs: PortableTextBlock[] = [
  block('s1-h', 'h3', '1. ¿Quién es el responsable del tratamiento de tus datos?'),
  block(
    's1-p',
    'normal',
    `Razón social: Growth Lab Consulting. RUC: (A completar). Dirección: San Isidro, Lima, Perú. Email de contacto: ${CONTACT_EMAIL}.`,
  ),
  block('s2-h', 'h3', '2. ¿Qué datos recopilamos?'),
  block(
    's2-p',
    'normal',
    'A través de los formularios de este sitio web recopilamos los siguientes datos personales: Nombre, Email, Empresa, Cargo, Consulta o mensaje.',
  ),
  block('s3-h', 'h3', '3. ¿Para qué usamos tus datos?'),
  block(
    's3-p1',
    'normal',
    'Los datos que nos proporcionas se usan exclusivamente para: Responder a tu consulta o solicitud de contacto. Enviarte el contenido descargable que solicitaste. Enviarte nuestra newsletter mensual si te suscribiste voluntariamente. Hacer seguimiento comercial relacionado con los servicios de Growth Lab.',
  ),
  block(
    's3-p2',
    'normal',
    'No compartimos, vendemos ni cedemos tus datos a terceros sin tu consentimiento explícito.',
  ),
  block('s4-h', 'h3', '4. ¿Por cuánto tiempo guardamos tus datos?'),
  block(
    's4-p',
    'normal',
    `Conservamos tus datos mientras exista una relación comercial o de comunicación activa contigo. Si en cualquier momento deseas que eliminemos tu información, puedes solicitarlo escribiéndonos a ${CONTACT_EMAIL}.`,
  ),
  block('s5-h', 'h3', '5. ¿Cuáles son tus derechos?'),
  block(
    's5-p1',
    'normal',
    'Tienes derecho a: Acceder a los datos que tenemos sobre ti. Solicitar la corrección de datos inexactos. Solicitar la eliminación de tus datos. Oponerte al tratamiento de tus datos con fines comerciales. Retirar tu consentimiento en cualquier momento.',
  ),
  block(
    's5-p2',
    'normal',
    `Para ejercer cualquiera de estos derechos escríbenos a ${CONTACT_EMAIL}.`,
  ),
  block('s6-h', 'h3', '6. ¿Usamos cookies?'),
  block(
    's6-p1',
    'normal',
    'Sí. Este sitio utiliza cookies propias y de terceros para mejorar la experiencia de navegación y analizar el tráfico. Puedes configurar tu navegador para rechazar las cookies, aunque esto puede afectar el funcionamiento de algunas funciones del sitio.',
  ),
  block(
    's6-p2',
    'normal',
    '(A completar con detalle de cookies usadas según la implementación técnica del sitio)',
  ),
  block('s7-h', 'h3', '7. Cambios en esta política'),
  block(
    's7-p',
    'normal',
    'Growth Lab se reserva el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.',
  ),
  block('s8-h', 'h3', '8. Contacto'),
  block(
    's8-p',
    'normal',
    `Si tienes dudas sobre esta política o sobre el tratamiento de tus datos puedes escribirnos a ${CONTACT_EMAIL} y te responderemos en menos de 48 horas.`,
  ),
]

const privacyBodyEn: PortableTextBlock[] = [
  block('s1-h', 'h3', '1. Who is responsible for processing your data?'),
  block(
    's1-p',
    'normal',
    `Legal name: Growth Lab Consulting. Tax ID: (To be completed). Address: San Isidro, Lima, Peru. Contact email: ${CONTACT_EMAIL}.`,
  ),
  block('s2-h', 'h3', '2. What data do we collect?'),
  block(
    's2-p',
    'normal',
    'Through the forms on this website we collect the following personal data: Name, Email, Company, Job title, Inquiry or message.',
  ),
  block('s3-h', 'h3', '3. How do we use your data?'),
  block(
    's3-p1',
    'normal',
    'The data you provide is used exclusively to: Respond to your inquiry or contact request. Send you downloadable content you requested. Send our monthly newsletter if you voluntarily subscribed. Follow up commercially regarding Growth Lab services.',
  ),
  block(
    's3-p2',
    'normal',
    'We do not share, sell, or transfer your data to third parties without your explicit consent.',
  ),
  block('s4-h', 'h3', '4. How long do we keep your data?'),
  block(
    's4-p',
    'normal',
    `We retain your data while an active commercial or communication relationship exists. If at any time you want us to delete your information, you can request it by writing to ${CONTACT_EMAIL}.`,
  ),
  block('s5-h', 'h3', '5. What are your rights?'),
  block(
    's5-p1',
    'normal',
    'You have the right to: Access the data we hold about you. Request correction of inaccurate data. Request deletion of your data. Object to processing of your data for commercial purposes. Withdraw your consent at any time.',
  ),
  block(
    's5-p2',
    'normal',
    `To exercise any of these rights, write to us at ${CONTACT_EMAIL}.`,
  ),
  block('s6-h', 'h3', '6. Do we use cookies?'),
  block(
    's6-p1',
    'normal',
    'Yes. This site uses first- and third-party cookies to improve browsing experience and analyze traffic. You can configure your browser to reject cookies, although this may affect some site functionality.',
  ),
  block(
    's6-p2',
    'normal',
    '(To be completed with details of cookies used according to the technical implementation of the site)',
  ),
  block('s7-h', 'h3', '7. Changes to this policy'),
  block(
    's7-p',
    'normal',
    'Growth Lab reserves the right to update this privacy policy at any time. Any change will be published on this page with the corresponding update date.',
  ),
  block('s8-h', 'h3', '8. Contact'),
  block(
    's8-p',
    'normal',
    `If you have questions about this policy or about the processing of your data, you can write to us at ${CONTACT_EMAIL} and we will respond within 48 hours.`,
  ),
]

export function legalPageFixture(locale: Locale, slug: string) {
  const privacySlug = locale === 'es' ? 'politica-de-privacidad' : 'privacy-policy'
  if (slug !== privacySlug) return null

  return {
    title: locale === 'es' ? 'Política de privacidad' : 'Privacy policy',
    body: locale === 'es' ? privacyBodyEs : privacyBodyEn,
  }
}

export {privacyBodyEs, privacyBodyEn}
