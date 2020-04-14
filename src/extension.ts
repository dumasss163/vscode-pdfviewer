import * as vscode from 'vscode'
import { PdfCustomProvider } from './pdfProvider'

export function activate(context: vscode.ExtensionContext) {
	const extensionRoot = vscode.Uri.file(context.extensionPath);
  // Register our custom editor provider
  const provider = new PdfCustomProvider(extensionRoot)
  context.subscriptions.push(vscode.window.registerCustomEditorProvider2(PdfCustomProvider.viewType, provider))
}

export function deactivate() {
}
