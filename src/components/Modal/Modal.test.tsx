import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import Modal from './Modal';

describe('Modal', () => {
  it('returns null if isOpen false', async () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()}>
        OK
      </Modal>
    );
    expect(screen.queryByText(/ok/i)).toBeNull();
  });

  it('returns childrens if isOpen true', async () => {
    let portalRoot = document.getElementById('portal');
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal');
      document.body.appendChild(portalRoot);
    }
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        childrens
      </Modal>
    );
    expect(screen.getByText(/childrens/i)).toBeInTheDocument();
  });
});
