import React, { useState, useEffect } from 'react';
import './styles.css';
import {logout} from '../../services/auth/auth.js';

import {Button,  
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap'



function sair(e){
  logout();
}

export default function navbar() {
    
    const Example = (props) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);}


    
    
    return (
        <>
          
               
            <div className="navbar">
      <Navbar className="navbar"  expand="md">
        <NavbarBrand className="link" href="/">Cinemagic</NavbarBrand>
        <NavbarToggler onClick={Example.toggle} />
        <Collapse isOpen={Example.isOpen} navbar>
        
          <Nav className="me-auto" navbar>
            {/*Seções*/}
            <NavItem>
              <NavLink className="link" href="/ListaSessoes">Sessões</NavLink>
            </NavItem>
        

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="link" nav caret>
                Opções
              </DropdownToggle>
              <DropdownMenu right>
               
                <DropdownItem>
                <NavLink href="/CadastroCinema">  Cadastro de Cinemas    </NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink href="/CadastroFilme">  Cadastro de Filmes    </NavLink>
                </DropdownItem>

                <DropdownItem>
                <NavLink href="/CadastroSessao">  Cadastro de Sessões    </NavLink>
                </DropdownItem>
                
                <DropdownItem>
                <NavLink href="/CadastroCliente">  Cadastro de Clientes   </NavLink>
                </DropdownItem>
               
                <DropdownItem divider />
                <DropdownItem onClick= {sair} >
                  Sair
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>








        </>
    );





}