import NavbarComponents from '../components/NavbarComponents'
import FooterComponents from '../components/FooterComponents'
export default function Home() {
  return (
    <>
      <NavbarComponents />
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <h1 className="text-body-emphasis">About Page</h1>
        <p className="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.</p>
      </div>
      <FooterComponents />
    </>
  );
}