import { useState, useEffect } from "react";
import {
  darkTheme,
  Address,
  Button,
  Badge,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "test-turbo";

export default function Web() {
  const [theme, setTheme] = useState("theme-default");

  useEffect(() => {
    document.body.classList.remove("theme-default", darkTheme);
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <div>
      <header>
        <button
          onClick={() =>
            setTheme(
              theme === "theme-default" ? darkTheme.className : "theme-default"
            )
          }
        >
          {theme === "theme-default" ? "Dark" : "Light"}
        </button>
      </header>
      <h1>Playground</h1>
      <Button>hello</Button>
      <Badge variant={"lime"}>badge</Badge>
      <Address value="0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Item</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Choose one</DropdownMenuLabel>
            <DropdownMenuRadioGroup value="one">
              <DropdownMenuRadioItem value="one">Item</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="two">Item</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="three">Item</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
