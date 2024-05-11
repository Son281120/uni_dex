'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout/Layout';
import Pools from '@/components/Layout/pages/Pools';
import Swap from '@/components/Layout/pages/Swap';
import Tokens from '@/components/Layout/pages/Tokens';

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/swap" element={<Swap />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/pools" element={<Pools />} />
      </Route>
    </Routes> 
  );
}
