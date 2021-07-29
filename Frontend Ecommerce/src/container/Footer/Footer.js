import React from "react";

import { Container, List, Divider, Image } from "semantic-ui-react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      
        <Container textAlign="center" className="footer__container">
          <Divider inverted section />
          <Image
            centered
            size="mini"
            src="https://img.icons8.com/doodle/96/000000/user-male-circle.png"
            alt="userPic"
          />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="https://github.com/Rajangrg">
              By I-Sell Group
            </List.Item>
            <List.Item as="a" href="https://github.com/Rajangrg/React-Ecommerce-Template">
              Help
            </List.Item>
            <List.Item as="a" href="https://github.com/Rajangrg/React-Ecommerce-Template/blob/master/LICENSE">
              About
            </List.Item>
          </List>
        </Container>
    </div>
  );
}

export default Footer;
