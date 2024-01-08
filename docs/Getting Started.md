# Getting Started

This guide is designed to help new developers at Resolv and interested investors get up and running with Prototype-V0. Here, you'll find step-by-step instructions on setting up the development environment and starting with the basics of the platform.

## Prerequisites

Before diving into Prototype-V0, please ensure you have the following installed:
- [Node.js](https://nodejs.org/): A JavaScript runtime environment. 
- [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview): A development environment to compile, deploy, test, and debug Ethereum software.

Refer to the provided links for detailed installation instructions.

## Installation and Setup

### Clone the Repository

Start by cloning the Prototype-V0 repository from GitHub:

```bash
git clone https://github.com/resolv-finance/prototype-v0.git
cd prototype-v0
```

### Install Dependencies

Navigate to the `blockchain` directory and install the necessary dependencies:

```bash
cd blockchain
npm install
```

This will set up all the required Node.js packages for the blockchain part of the project.
## Configuration

After installing the dependencies, you'll need to configure the project:

1. **Environment Setup**  
   Create a `.env` file in the root of the `blockchain` directory. Use the `.env.example` file as a reference to set up your environment variables.

2. **Deploy Contracts with Hardhat**  
   To deploy the smart contracts, first ensure that you have a local Hardhat node running. Start the local node using:

   ```bash
   npx hardhat node
   ```

   This command starts a local Ethereum network for development purposes. It will provide you with a list of accounts and private keys for testing.

   Next, deploy your contracts to the local Hardhat node with the following command:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

   Ensure your deployment script in the `scripts` directory is correctly set up for deployment. This command will deploy the contracts to the local Hardhat network.

   Note: This step assumes that you have a deployment script ready in your `scripts` directory, and your `hardhat.config.js` is properly configured for local deployment.

## Basic Usage

With Prototype-V0 set up, you can start exploring its functionalities:

1. **Interact with Smart Contracts**  
   Use the deployed contracts to protect ERC-20 tokens, submit disputes, and recover funds as necessary.

2. **Develop and Test**  
   Dive into the codebase, make modifications, and test them using Hardhat's comprehensive testing framework.

## Troubleshooting

Encountered an issue? Here are some tips:
- Double-check the installation of Node.js and Hardhat.
- Ensure that your `.env` file matches the format provided in `.env.example`.
- For more detailed troubleshooting, refer to the [Hardhat Documentation](https://hardhat.org/getting-started/).

