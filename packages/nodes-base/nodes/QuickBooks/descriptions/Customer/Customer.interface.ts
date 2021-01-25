import {
	AltBillAddr,
	MetaData,
	PrimaryEmailAddr,
	PrimaryPhone,
} from '../Shared.interface';

export interface Customer {
	Active: boolean;
	Balance: 85.0;
	BalanceWithJobs: number;
	BillAddr: AltBillAddr;
	BillWithParent: false;
	CompanyName: string;
	DisplayName: string;
	domain: 'QBO';
	FamilyName: string;
	FullyQualifiedName: string;
	GivenName: string;
	Id: string;
	Job: boolean;
	MetaData: MetaData;
	PreferredDeliveryMethod: string;
	PrimaryEmailAddr: PrimaryEmailAddr;
	PrimaryPhone: PrimaryPhone;
	PrintOnCheckName: string;
	SyncToken: string;
	Taxable: boolean;
}
