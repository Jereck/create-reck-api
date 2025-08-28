#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import chalk from 'chalk'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];
if (!projectName) {
    console.error(chalk.red('You must provide a project name.'))
    process.exit(1);
}

const templateDir = path.join(__dirname, '../template');
const targetDir = path.join(process.cwd(), projectName);

if (fs.existsSync(targetDir)) {
    console.error(chalk.red(`Directory "${projectName}" already exists`));
    exit.process(1);
}

fs.mkdirSync(targetDir, { recursive: true });

const copyRecursive = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            fs.mkdirSync(destPath, { recursive: true });
            copyRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyRecursive(templateDir, targetDir);

console.log(chalk.green('Project files copies. Installing dependencies...'));

execSync('npm install', { cwd: targetDir, stdio: 'inherit' });

console.log(chalk.green(`Done! Your API project "${projectName}" is ready`));