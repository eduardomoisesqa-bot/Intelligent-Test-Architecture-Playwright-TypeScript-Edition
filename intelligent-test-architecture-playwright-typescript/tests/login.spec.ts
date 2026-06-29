import { test } from '@playwright/test';
import { LoginFlow } from '../../src/flows/LoginFlow';
import { LoginAssertions } from '../../src/assertions/LoginAssertions';

test('deve exibir erro ao tentar login com credenciais inválidas', async ({ page }) => {
  const loginFlow = new LoginFlow(page);
  const loginAssertions = new LoginAssertions(page);

  await loginFlow.login('usuario@teste.com', 'senhaerrada');

  await loginAssertions.shouldShowLoginError();
});

