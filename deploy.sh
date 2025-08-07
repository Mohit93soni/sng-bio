#!/bin/bash

# SND Regenics - Deployment Script
# This script prepares and deploys the website for production

set -e

echo "🚀 SND Regenics - Production Deployment"
echo "======================================="

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node --version)"
    exit 1
fi

print_success "Node.js version check passed: $(node --version)"

# Install dependencies
print_status "Installing dependencies..."
npm ci
print_success "Dependencies installed successfully"

# Run TypeScript check
print_status "Running TypeScript checks..."
npm run typecheck
print_success "TypeScript checks passed"

# Run tests
print_status "Running tests..."
npm test
print_success "All tests passed"

# Build the application
print_status "Building application for production..."
npm run build
print_success "Build completed successfully"

# Check build output
if [ ! -d "dist/spa" ]; then
    print_error "Build failed - dist/spa directory not found"
    exit 1
fi

print_success "Build verification passed"

echo ""
echo "✅ Deployment Preparation Complete!"
echo ""
echo "📁 Built files are located in: ./dist/spa"
echo ""
echo "🌐 Deployment Options:"
echo "   1. Static Hosting (Netlify/Vercel): Upload ./dist/spa folder"
echo "   2. Docker: docker build -t snd-regenics ."
echo "   3. Traditional Server: Serve ./dist/spa as document root"
echo ""
echo "📖 See DEPLOYMENT.md for detailed deployment instructions"
echo ""
print_success "SND Regenics website is ready for production deployment! 🚀"
