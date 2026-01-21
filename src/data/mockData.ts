import type {
  User,
  Customer,
  Account,
  Transaction,
  Beneficiary,
  Instrument,
  Deposit,
  Hold,
  SupportTicket,
  FeeTable,
  CryptoWalletAddresses,
  CDInterestTier,
  WireSettings,
} from '@/types/banking';

// Demo Users
export const demoUsers: User[] = [
  {
    id: 'admin-1',
    email: 'admin@prominencebank.com',
    name: 'Sarah Mitchell',
    role: 'admin',
    profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'client-1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    role: 'client',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    createdAt: '2024-03-15T00:00:00Z',
  },
  {
    id: 'client-2',
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    role: 'client',
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    createdAt: '2024-05-20T00:00:00Z',
  },
];

// Demo Customers
export const demoCustomers: Customer[] = [
  {
    id: 'cust-1',
    type: 'personal',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1985-06-15',
    address: {
      line1: '123 Wall Street',
      line2: 'Suite 400',
      city: 'New York',
      state: 'NY',
      postalCode: '10005',
      country: 'United States',
    },
    status: 'active',
    riskLevel: 'low',
    createdAt: '2024-03-15T00:00:00Z',
  },
  {
    id: 'cust-2',
    type: 'business',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    companyName: 'Smith Global Ventures LLC',
    address: {
      line1: '456 Financial Plaza',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90071',
      country: 'United States',
    },
    status: 'active',
    riskLevel: 'medium',
    createdAt: '2024-05-20T00:00:00Z',
  },
  {
    id: 'cust-3',
    type: 'business',
    name: 'Robert Chen',
    email: 'robert.chen@techcorp.com',
    phone: '+1 (555) 456-7890',
    companyName: 'TechCorp International',
    address: {
      line1: '789 Innovation Drive',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94102',
      country: 'United States',
    },
    status: 'active',
    riskLevel: 'low',
    createdAt: '2024-01-10T00:00:00Z',
  },
];

// Demo Accounts
export const demoAccounts: Account[] = [
  {
    id: 'acc-1',
    customerId: 'cust-1',
    customerName: 'John Doe',
    accountNumber: '9704588935',
    type: 'checking',
    title: 'Primary Checking',
    currency: 'USD',
    availableBalance: 125750.45,
    inTransitBalance: 5000.00,
    heldBalance: 0,
    status: 'active',
    createdAt: '2024-03-15T00:00:00Z',
  },
  {
    id: 'acc-2',
    customerId: 'cust-1',
    customerName: 'John Doe',
    accountNumber: '7163249189',
    type: 'savings',
    title: 'Euro Savings',
    currency: 'EUR',
    availableBalance: 45230.80,
    inTransitBalance: 0,
    heldBalance: 0,
    status: 'active',
    createdAt: '2024-03-15T00:00:00Z',
  },
  {
    id: 'acc-3',
    customerId: 'cust-2',
    customerName: 'Jane Smith',
    accountNumber: '5051011138',
    type: 'business',
    title: 'Business Operations',
    currency: 'USD',
    availableBalance: 892450.00,
    inTransitBalance: 125000.00,
    heldBalance: 50000.00,
    status: 'active',
    minimumBalance: 10000,
    createdAt: '2024-05-20T00:00:00Z',
  },
  {
    id: 'acc-4',
    customerId: 'cust-3',
    customerName: 'Robert Chen',
    accountNumber: '8821456723',
    type: 'investment',
    title: 'Corporate Investment',
    currency: 'GBP',
    availableBalance: 1250000.00,
    inTransitBalance: 0,
    heldBalance: 0,
    status: 'active',
    createdAt: '2024-01-10T00:00:00Z',
  },
];

// Demo Transactions
export const demoTransactions: Transaction[] = [
  {
    id: 'txn-1',
    accountId: 'acc-1',
    type: 'credit',
    amount: 15000.00,
    currency: 'USD',
    description: 'Wire Transfer from ABC Corp',
    status: 'completed',
    reference: 'WT2024012001',
    timestamp: '2024-01-20T09:30:00Z',
    category: 'Wire Transfer',
  },
  {
    id: 'txn-2',
    accountId: 'acc-1',
    type: 'debit',
    amount: 2500.00,
    currency: 'USD',
    description: 'International Wire to UK Ltd',
    status: 'completed',
    reference: 'WT2024012002',
    timestamp: '2024-01-19T14:45:00Z',
    category: 'Wire Transfer',
  },
  {
    id: 'txn-3',
    accountId: 'acc-1',
    type: 'credit',
    amount: 8750.00,
    currency: 'USD',
    description: 'Deposit - ACH Transfer',
    status: 'completed',
    reference: 'ACH2024011801',
    timestamp: '2024-01-18T11:00:00Z',
    category: 'Deposit',
  },
  {
    id: 'txn-4',
    accountId: 'acc-1',
    type: 'fee',
    amount: 25.00,
    currency: 'USD',
    description: 'Monthly Account Fee',
    status: 'completed',
    reference: 'FEE2024010101',
    timestamp: '2024-01-01T00:00:00Z',
    category: 'Fee',
  },
  {
    id: 'txn-5',
    accountId: 'acc-3',
    type: 'credit',
    amount: 125000.00,
    currency: 'USD',
    description: 'Large Wire Transfer - Pending Clearance',
    status: 'pending',
    reference: 'WT2024012003',
    timestamp: '2024-01-20T16:00:00Z',
    category: 'Wire Transfer',
  },
  {
    id: 'txn-6',
    accountId: 'acc-2',
    type: 'transfer',
    amount: 5000.00,
    currency: 'EUR',
    description: 'Internal Transfer to USD Account',
    status: 'completed',
    reference: 'INT2024011901',
    timestamp: '2024-01-19T10:30:00Z',
    category: 'Transfer',
  },
  {
    id: 'txn-7',
    accountId: 'acc-1',
    type: 'credit',
    amount: 50000.00,
    currency: 'USD',
    description: 'Investment Returns Q4',
    status: 'completed',
    reference: 'INV2024011501',
    timestamp: '2024-01-15T09:00:00Z',
    category: 'Investment',
  },
  {
    id: 'txn-8',
    accountId: 'acc-3',
    type: 'debit',
    amount: 75000.00,
    currency: 'USD',
    description: 'Vendor Payment - Global Supplies',
    status: 'completed',
    reference: 'VP2024011401',
    timestamp: '2024-01-14T15:30:00Z',
    category: 'Payment',
  },
];

// Demo Beneficiaries
export const demoBeneficiaries: Beneficiary[] = [
  {
    id: 'ben-1',
    customerId: 'cust-1',
    name: 'ABC Corporation',
    accountNumber: '123456789',
    bankName: 'Chase Bank',
    type: 'external',
    routingNumber: '021000021',
    lastUsed: '2024-01-15T00:00:00Z',
    createdAt: '2024-03-20T00:00:00Z',
  },
  {
    id: 'ben-2',
    customerId: 'cust-1',
    name: 'Jane Smith',
    accountNumber: '5051011138',
    bankName: 'Prominence Bank',
    type: 'internal',
    lastUsed: '2024-01-18T00:00:00Z',
    createdAt: '2024-04-01T00:00:00Z',
  },
  {
    id: 'ben-3',
    customerId: 'cust-2',
    name: 'UK Trading Ltd',
    accountNumber: 'GB82WEST12345698765432',
    bankName: 'Barclays Bank',
    type: 'external',
    swiftCode: 'BARCGB22',
    createdAt: '2024-05-25T00:00:00Z',
  },
];

// Demo Instruments
export const demoInstruments: Instrument[] = [
  {
    id: 'inst-1',
    customerId: 'cust-1',
    customerName: 'John Doe',
    type: 'CD',
    referenceNumber: 'CD2024001',
    amount: 50000.00,
    currency: 'USD',
    issueDate: '2024-01-01',
    maturityDate: '2025-01-01',
    status: 'active',
    details: {
      applicant: 'John Doe',
      applicantAddress: '123 Wall Street, New York, NY 10005',
      beneficiary: 'John Doe',
      beneficiaryAddress: '123 Wall Street, New York, NY 10005',
      interestRate: 4.5,
      term: '1 Year',
    },
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'inst-2',
    customerId: 'cust-2',
    customerName: 'Jane Smith',
    type: 'SBLC',
    referenceNumber: 'SBLC2024001',
    amount: 500000.00,
    currency: 'USD',
    issueDate: '2024-02-15',
    maturityDate: '2025-02-15',
    status: 'active',
    details: {
      receivingBank: 'HSBC London',
      bankSwiftCode: 'HSBCGB2L',
      attentionOfficer: 'James Wilson',
      beneficiary: 'Global Trading Corp',
      beneficiaryAddress: '100 Liverpool Street, London EC2M 2AT',
    },
    createdAt: '2024-02-15T00:00:00Z',
  },
  {
    id: 'inst-3',
    customerId: 'cust-2',
    customerName: 'Jane Smith',
    type: 'KTT',
    referenceNumber: 'KTT2024001',
    amount: 1000000.00,
    currency: 'EUR',
    issueDate: '2024-03-01',
    maturityDate: '2024-12-31',
    status: 'active',
    details: {
      issuer: 'Prominence Bank',
      receiver: 'Deutsche Bank Frankfurt',
      remitter: 'Smith Global Ventures LLC',
      beneficiary: 'European Partners GmbH',
    },
    messageBody: `KEY TESTED TELEX
    
TO: DEUTSCHE BANK FRANKFURT
SWIFT: DEUTDEFF
ATTN: INTERNATIONAL SETTLEMENTS

FROM: PROMINENCE BANK
SWIFT: PROMUS33

DATE: MARCH 01, 2024
REF: KTT2024001

WE HEREBY CONFIRM AND AUTHENTICATE THE FOLLOWING:

REMITTER: SMITH GLOBAL VENTURES LLC
BENEFICIARY: EUROPEAN PARTNERS GMBH
AMOUNT: EUR 1,000,000.00 (ONE MILLION EUROS)
VALUE DATE: MARCH 01, 2024

THIS KEY TESTED TELEX CONFIRMS THAT THE ABOVE REFERENCED FUNDS ARE ON DEPOSIT AND AVAILABLE.

TEST KEY: XXXXXXX

AUTHORIZED SIGNATURES:
_____________________
PROMINENCE BANK`,
    createdAt: '2024-03-01T00:00:00Z',
  },
  {
    id: 'inst-4',
    customerId: 'cust-3',
    customerName: 'Robert Chen',
    type: 'BG',
    referenceNumber: 'BG2024001',
    amount: 250000.00,
    currency: 'GBP',
    issueDate: '2024-01-20',
    maturityDate: '2025-01-20',
    status: 'active',
    details: {
      receivingBank: 'Barclays Bank PLC',
      bankSwiftCode: 'BARCGB22',
      beneficiary: 'UK Construction Ltd',
      beneficiaryAddress: '50 Canary Wharf, London E14 5AB',
    },
    createdAt: '2024-01-20T00:00:00Z',
  },
];

// Demo Deposits
export const demoDeposits: Deposit[] = [
  {
    id: 'dep-1',
    accountId: 'acc-1',
    accountNumber: '9704588935',
    customerName: 'John Doe',
    type: 'cash',
    amount: 5000.00,
    currency: 'USD',
    date: '2024-01-20',
    time: '14:30',
    description: 'Cash deposit - branch',
    status: 'hold',
    withFee: false,
    createdBy: 'admin-1',
    createdAt: '2024-01-20T14:30:00Z',
  },
  {
    id: 'dep-2',
    accountId: 'acc-3',
    accountNumber: '5051011138',
    customerName: 'Jane Smith',
    type: 'cheque',
    amount: 125000.00,
    currency: 'USD',
    date: '2024-01-19',
    time: '10:00',
    description: 'Corporate cheque deposit',
    status: 'hold',
    withFee: true,
    createdBy: 'admin-1',
    createdAt: '2024-01-19T10:00:00Z',
  },
];

// Demo Holds
export const demoHolds: Hold[] = [
  {
    id: 'hold-1',
    accountId: 'acc-3',
    accountNumber: '5051011138',
    customerName: 'Jane Smith',
    type: 'admin',
    amount: 50000.00,
    currency: 'USD',
    description: 'Compliance review - pending documentation',
    status: 'active',
    createdBy: 'admin-1',
    createdAt: '2024-01-15T09:00:00Z',
  },
];

// Demo Support Tickets
export const demoSupportTickets: SupportTicket[] = [
  {
    id: 'ticket-1',
    customerId: 'cust-1',
    customerName: 'John Doe',
    subject: 'Wire Transfer Inquiry',
    status: 'open',
    priority: 'medium',
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        senderName: 'John Doe',
        message: 'I would like to inquire about the status of my international wire transfer (ref: WT2024012002). It has been 3 days and the recipient has not received the funds yet.',
        timestamp: '2024-01-20T10:00:00Z',
      },
      {
        id: 'msg-2',
        sender: 'support',
        senderName: 'Support Team',
        message: 'Thank you for reaching out. We are looking into your wire transfer status. International transfers typically take 3-5 business days. We will provide an update within 24 hours.',
        timestamp: '2024-01-20T11:30:00Z',
      },
    ],
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T11:30:00Z',
  },
];

// Demo Settings
export const demoFeeTable: FeeTable = {
  monthlyFee: 25.00,
  internationalTransactionFee: 1.5,
  bankToBankFee: 0.5,
  bankToOtherBankFee: 1.0,
  chequeCancellationFee: 35.00,
  creditCardConversionFee: 2.5,
  loanInterestRate: 7.5,
  latePaymentFeePerDay: 0.05,
  cryptoTransferFee: 1.0,
};

export const demoCryptoAddresses: CryptoWalletAddresses = {
  BTC: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  ETH: '0x742d35Cc6634C0532925a3b844Bc9e7595f8Aa31',
  XLM: 'GBXRPLCMQKZPBMAXBXQW3J3IHIQVFMQJXQGGK6FHSZVWKB6FJZQKRYXK',
  BCH: 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
  PAX: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
};

export const demoCDRates: CDInterestTier[] = [
  { term: '1 Year', rangeFrom: 0, rangeTo: 50000, interestRate: 4.0 },
  { term: '1 Year', rangeFrom: 50001, rangeTo: 100000, interestRate: 4.25 },
  { term: '1 Year', rangeFrom: 100001, rangeTo: 500000, interestRate: 4.5 },
  { term: '1 Year', rangeFrom: 500001, rangeTo: 999999999, interestRate: 4.75 },
  { term: '18 Months', rangeFrom: 0, rangeTo: 50000, interestRate: 4.25 },
  { term: '18 Months', rangeFrom: 50001, rangeTo: 100000, interestRate: 4.5 },
  { term: '18 Months', rangeFrom: 100001, rangeTo: 500000, interestRate: 4.75 },
  { term: '18 Months', rangeFrom: 500001, rangeTo: 999999999, interestRate: 5.0 },
  { term: '2 Years', rangeFrom: 0, rangeTo: 50000, interestRate: 4.5 },
  { term: '2 Years', rangeFrom: 50001, rangeTo: 100000, interestRate: 4.75 },
  { term: '2 Years', rangeFrom: 100001, rangeTo: 500000, interestRate: 5.0 },
  { term: '2 Years', rangeFrom: 500001, rangeTo: 999999999, interestRate: 5.25 },
  { term: '3 Years', rangeFrom: 0, rangeTo: 50000, interestRate: 5.0 },
  { term: '3 Years', rangeFrom: 50001, rangeTo: 100000, interestRate: 5.25 },
  { term: '3 Years', rangeFrom: 100001, rangeTo: 500000, interestRate: 5.5 },
  { term: '3 Years', rangeFrom: 500001, rangeTo: 999999999, interestRate: 5.75 },
];

export const demoWireSettings: WireSettings = {
  minimumBalances: {
    USD: 1000,
    EUR: 1000,
    GBP: 1000,
    CHF: 1000,
    CAD: 1000,
    AUD: 1000,
    JPY: 100000,
  },
  instructions: `<h2>Wire Transfer Instructions</h2>
<p>To fund your Prominence Bank account, please use the following wire transfer details:</p>

<h3>Domestic Wire (USD)</h3>
<table>
  <tr><td><strong>Bank Name:</strong></td><td>Prominence Bank</td></tr>
  <tr><td><strong>Routing Number:</strong></td><td>021000021</td></tr>
  <tr><td><strong>Account Number:</strong></td><td>[Your Account Number]</td></tr>
  <tr><td><strong>Account Name:</strong></td><td>[Your Account Name]</td></tr>
</table>

<h3>International Wire</h3>
<table>
  <tr><td><strong>Bank Name:</strong></td><td>Prominence Bank</td></tr>
  <tr><td><strong>SWIFT Code:</strong></td><td>PROMUS33</td></tr>
  <tr><td><strong>Bank Address:</strong></td><td>100 Wall Street, New York, NY 10005, USA</td></tr>
  <tr><td><strong>Account Number:</strong></td><td>[Your Account Number]</td></tr>
  <tr><td><strong>Account Name:</strong></td><td>[Your Account Name]</td></tr>
</table>

<h3>Important Notes</h3>
<ul>
  <li>Always include your account number in the reference field</li>
  <li>International wires may take 3-5 business days to process</li>
  <li>Fees may apply for incoming international wires</li>
</ul>`,
};

// Helper function to get customer ID by user email
export function getCustomerByEmail(email: string): Customer | undefined {
  return demoCustomers.find(c => c.email === email);
}

// Helper function to get accounts for a customer
export function getAccountsByCustomerId(customerId: string): Account[] {
  return demoAccounts.filter(a => a.customerId === customerId);
}

// Helper function to get transactions for an account
export function getTransactionsByAccountId(accountId: string): Transaction[] {
  return demoTransactions.filter(t => t.accountId === accountId);
}

// Helper function to get total balance for a customer
export function getTotalBalanceByCustomerId(customerId: string): number {
  return demoAccounts
    .filter(a => a.customerId === customerId)
    .reduce((sum, a) => sum + a.availableBalance, 0);
}
