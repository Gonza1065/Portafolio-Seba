export function Footer() {
  return (
    <>
      <div className="text-center text-4xl font-thin text-white mb-6">
        <h2 className="min-[350px]:text-xl max-[350px]:text-xl">
          Puedes contactarme en las siguientes redes sociales.
        </h2>
      </div>
      <div className="bg-neutral-800 py-8 text-white max-[350px]:rounded-lg">
        <div className="flex justify-center min-[350px]:flex-col min-[350px]:text-center max-[600px]:flex-col min-[601px]:flex-row">
          <a
            href="https://instagram.com/contador_sebastian_saguas?igshid=NzZlODBkYWE4Ng=="
            className="m-6"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@sebastiansaguas7217?si=NX7hQcwzLhJG5Xk3"
            className="m-6"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/contador.sebastian.saguas?mibextid=ZbWKwL"
            className="m-6"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-saguas-a963ab152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="m-6"
          >
            Linkedln
          </a>
          <h3 className="p-6">Correo</h3>
          <a href="https://wa.me/2634347905" className="m-6">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
