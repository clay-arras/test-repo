import logo from './logo.svg';
import './App.css';
import {Button} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import RealNavbar from "./Navbar";


function App() {
  return (
    <div className="App">
      <RealNavbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button color="primary">
            Hello....
          </Button>
        </p>
        <Dropdown>
          <DropdownTrigger>
            <Button
                variant="bordered">
              Open Menu
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </header>
    </div>
  );
}

export default App;
