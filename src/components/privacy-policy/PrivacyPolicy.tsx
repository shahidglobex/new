import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import {
  ContentSection,
  Content,
  ServiceWrapper,
  PrivacyPolicyWrapper,
  PrivacySectionHeadings,
} from "../ContentBlock/styles";

const PrivacyPolicy = () => {
  return (
    <ContentSection>
      <Fade direction={"left"} triggerOnce>
        <Col lg={24} md={24} sm={24} xs={24}>
          <PrivacyPolicyWrapper>
            <h6>{"Privacy Policy"}</h6>
            <Content>
              These terms and conditions outline the rules and regulations for
              the use of Shyam traders Website, located at
              https://www.shyamtraders.net By accessing this website we assume
              you accept these terms and conditions. Do not continue to use
              https://www.shyamtraders.net if you do not agree to take all of
              the terms and conditions stated on this page.The following
              terminology applies to these Terms and Conditions, Privacy
              Statement and Disclaimer Notice and all Agreements: “Client”,
              “You” and “Your” refers to you, the person log on this website and
              compliant to the Company’s terms and conditions. “The Company”,
              “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”,
              “Parties”, or “Us”, refers to both the Client and ourselves. All
              terms refer to the offer, acceptance and consideration of payment
              necessary to undertake the process of our assistance to the Client
              in the most appropriate manner for the express purpose of meeting
              the Client’s needs in respect of provision of the Company’s stated
              services, in accordance with and subject to, prevailing law. Any
              use of the above terminology or other words in the singular,
              plural, capitalization and/or he/she or they, are taken as
              interchangeable and therefore as referring to the same.
              <PrivacySectionHeadings>Cookies</PrivacySectionHeadings>
              We employ the use of cookies. By accessing
              https://www.shyamtraders.net, you agreed to use cookies in
              agreement with the Shyam traders Privacy Policy. Most interactive
              websites use cookies to let us retrieve the user’s details for
              each visit. Cookies are used by our website to enable the
              functionality of certain areas to make it easier for people
              visiting our website. Some of our affiliate/advertising partners
              may also use cookies.
              <PrivacySectionHeadings>Trading</PrivacySectionHeadings>
              Shyam Traders provides access to various financial markets and
              instruments, and you’re responsible for your trading decisions and
              actions. You must comply with all applicable laws and regulations
              and use Shyam Traders for lawful purposes only.
              <PrivacySectionHeadings>Risk Disclosure</PrivacySectionHeadings>
              Trading involves risks, and you should carefully consider your
              investment objectives, risk tolerance, and financial situation
              before using Shyam Traders. You should also educate yourself about
              the risks and benefits of trading and seek professional advice if
              needed.
              <PrivacySectionHeadings>Fees and Charges</PrivacySectionHeadings>
              Shyam Traders may charge fees and commissions for its services,
              which may vary depending on the type of account, financial
              instrument, and market conditions. You’re responsible for paying
              all applicable fees and charges.
              <PrivacySectionHeadings>Termination</PrivacySectionHeadings>
              Shyam Traders may terminate or suspend your account at any time
              for any reason, without prior notice. You may also terminate your
              account at any time by following the instructions on the website.
              <PrivacySectionHeadings>
                Limitation of Liability
              </PrivacySectionHeadings>
              Shyam Traders is not liable for any direct or indirect damages,
              including but not limited to loss of capital, data, or use,
              arising from your use of Shyam traders or its services. Shyam
              traders also disclaims any warranties, express or implied,
              including but not limited to warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
              <PrivacySectionHeadings>Terms of Trading</PrivacySectionHeadings>
              Line Trading (Chamki ) & Scalping is strictly prohibited at our
              platform. We reserve all the right to suspend the trade and
              account in case we found somebody indulging in such activities.
              <PrivacySectionHeadings>
                Bank Details/UPI ID:
              </PrivacySectionHeadings>
              Please note that our bank details/UPI ID may undergo changes.
              Kindly refrain from depositing funds using any previously provided
              bank details, as we will not be liable for any transactions made
              in error.
              <PrivacySectionHeadings>
                Jabbing and Scalping
              </PrivacySectionHeadings>
              Profit Booking Within 5 Minutes: Any profits made within 5 minutes
              of a trade will be considered as jobbing or scalping. The platform
              reserves the right to remove such profits.
              <PrivacySectionHeadings>No VPN Usage</PrivacySectionHeadings>
              Trading on the platform using a VPN (Virtual Private Network) is
              not allowed. If someone is found using a VPN, their trades will be
              deleted.
              <PrivacySectionHeadings>
                Dividend and Bonus
              </PrivacySectionHeadings>
              Dividend and bonus calculations will follow the rules and
              regulations of the relevant stock exchange circulars.
              <PrivacySectionHeadings>
                Cross Orders and Same IP Address
              </PrivacySectionHeadings>
              The platform will cancel cross orders and trades made with the
              same IP address. Trading with the same IP address in multiple
              accounts is strictly prohibited, and profitable trades may be
              removed without prior notice.
              <PrivacySectionHeadings>
                Negative Balance Protection
              </PrivacySectionHeadings>
              The platform offers protection against negative balances, with a
              specified step-out level of 30%.
              <PrivacySectionHeadings>
                Execution of Orders
              </PrivacySectionHeadings>
              Stop loss and other orders will be executed based on bid/ask
              prices, not the last traded price (LTP).
              <PrivacySectionHeadings>
                Prohibited Trading Practices
              </PrivacySectionHeadings>
              Chamka (possibly a term specific to the platform), lines, and
              insider trades are not acceptable.
              <PrivacySectionHeadings>
                Reporting Glitches
              </PrivacySectionHeadings>
              Users are required to report any glitches or software issues
              immediately. If a client cannot close their positions due to a
              software glitch, they should notify the platform, and the
              positions will be squared off at the current market price (CMP)
              upon receipt of the message.
              <PrivacySectionHeadings>Group Trading</PrivacySectionHeadings>
              Group trading is not allowed on the platform without prior written
              permission from the platform’s administration.
              <PrivacySectionHeadings> Payout Delays</PrivacySectionHeadings>
              Payouts may be delayed due to banking server issues, and clients
              are advised to be patient in such situations. Margin and Fund
              Management Clients are responsible for maintaining adequate
              margin/fund levels to avoid partial liquidation or losses.
              <PrivacySectionHeadings> Account Locking</PrivacySectionHeadings>
              If a client does not use their account for 7 days, it will be
              locked for security reasons. To unlock the account, the client
              should contact customer support. These are the terms and
              conditions outlined by Shyam traders, presumably for trading on
              their platform. It’s important to read and understand these terms
              before using their platform, as they outline the rules and
              expectations for users. Here’s a breakdown of each point:
            </Content>

            <ServiceWrapper></ServiceWrapper>
          </PrivacyPolicyWrapper>
        </Col>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(PrivacyPolicy);
