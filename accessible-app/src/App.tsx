import AccessibleNavigation from "@/components/Nav";
import HamburgerMenu from "@/components/HamburgerMenu";
import GoogleMapsIframe from "@/components/GoogleMapsIframe";
import Section from "@/components/Section";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import Icons from "./components/Icons";

function App() {
  return (
    <main className="mx-auto max-w-[850px] px-4 py-24">
      <Heading level={1}>Accessible App Examples</Heading>
      <main>
        <Section id="navigation" title="Navigation">
          <AccessibleNavigation />
          <HamburgerMenu />
        </Section>
        <Section id="google-maps" title="Google Maps iFrame">
          <GoogleMapsIframe
            title="San Francisco"
            embedQuery="pb=!1m18!1m12!1m3!1d3153.019478927484!2d-122.41941548468137!3d37.77492977975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0e7e7b%3A0x2c0b7e7b0e7e7b0e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
            driveDirections="Head north on Market St toward 5th St, Turn right onto 6th St, Your destination will be on the left."
          />
        </Section>
        <Section id="form" title="Accessible Form">
          <Form />
        </Section>
        <Section id="icons" title="Accessible Icons">
          <Icons />
        </Section>
      </main>
    </main>
  );
}

export default App;
