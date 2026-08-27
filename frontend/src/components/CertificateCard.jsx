import './CertificateCard.css';

export default function CertificateCard() {
  return (
    <section className="section dark" id="certificacion">
      <div className="wrap cert">
        <div>
          <span className="eyebrow">Certificación y confianza</span>
          <h2 style={{ marginTop: 16 }}>Un certificado que se puede verificar, no solo mostrar</h2>
          <p>
            Cada certificado tiene folio único y una página de verificación pública.
            Cualquier persona —un estudiante, un empleador— puede confirmar que existe
            y que sigue siendo válido.
          </p>
          <div className="cert__note">
            <b>Importante:</b> el certificado acredita la finalización y aprobación de un
            curso revisado. No equivale a un título profesional ni a una licencia para
            ejercer una profesión regulada.
          </div>
        </div>

        <div className="certificate">
          <div className="certificate__top">
            <span className="eyebrow">Certificado</span>
            <div>
              <div className="certificate__qr" aria-hidden="true" />
              <div className="certificate__folio">AP-2026-000104</div>
            </div>
          </div>
          <h3>Para acreditar que</h3>
          <p className="curso">Fundamentos de Repostería</p>
          <div className="certificate__meta">
            <div><span>Instructor</span><b>María Elena Ruiz</b></div>
            <div><span>Duración</span><b>8 horas</b></div>
            <div><span>Resultado</span><b>92/100</b></div>
            <div><span>Tipo</span><b>Certificado</b></div>
          </div>
          <div className="certificate__valid">
            <span className="dot" /> Estado: válido — verificable por código
          </div>
        </div>
      </div>
    </section>
  );
}
