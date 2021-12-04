import React from 'react'
import { FaSteam } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
function About() {
    return (
        <div className="contacts">
            <div className="git">
                <h1>Get In Touch</h1>
                <field>
                    <div>
                        <input type="text" required autocomplete="off" id="username" />
                        <label for="username" title="Name"></label>
                    </div>
                    <div>
                        <input type="text" required autocomplete="off" id="username" />
                        <label for="username" title="Email"></label>
                    </div>
                    <div>
                        <input type="text" required autocomplete="off" id="username" />
                        <label for="username" title="Message"></label>
                    </div>
                    <button className="submit-btn">Submit</button>
                </field>
            </div>
            <div className="clinks">
                <div className="my-steam">
                    <a href="https://steamcommunity.com/id/aomine24/"><FaSteam /></a>
                </div>
                <div className="my-inst">
                    <a href="https://www.instagram.com/anglvdnl/"><FaInstagram /></a>
                </div>
                <div className="my-linkedin">
                    <a href="https://www.linkedin.com/in/daniel-angelov-b84a03202/"><AiOutlineLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default About
