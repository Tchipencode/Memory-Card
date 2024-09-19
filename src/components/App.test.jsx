import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "./App.jsx"

// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });

describe('App', () => {
   it('renders headline', () => {
     render(<App title="React" />);
 
     screen.debug();
 
     // check if App components renders headline
   });
 });