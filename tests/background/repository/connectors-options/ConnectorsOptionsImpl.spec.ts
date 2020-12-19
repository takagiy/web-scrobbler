import { expect } from 'chai';

import { getTestName } from '#/helpers/util';
import { MockedStorage } from '#/mock/MockedStorage';

import { ConnectorsOptions } from '@/background/repository/connectors-options/ConnectorsOptions';
import { ConnectorsOptionsData } from '@/background/repository/connectors-options/ConnectorsOptionsData';
import { ConnectorsOptionsImpl } from '@/background/repository/connectors-options/ConnectorsOptionsImpl';

describe(getTestName(__filename), testConnectorsOptions);

function testConnectorsOptions() {
	const connectorsOptions = createConnectorsOptions();

	// it('should return default options', () => {
	// 	for (const connectorId in defaultConnectorsOptions) {
	// 		for (const optionKey in defaultConnectorsOptions[connectorId]) {
	// 			const optionValue =
	// 				defaultConnectorsOptions[connectorId][optionKey];
	// 			const promise = connectorsOptions.getOption(
	// 				connectorId,
	// 				optionKey
	// 			);

	// 			expect(promise).to.be.eventually.equal(optionValue);
	// 		}
	// 	}
	// });

	it('should set option for the connector', () => {
		const promise = connectorsOptions.setOption(
			'youtube',
			'scrobbleMusicOnly',
			true
		);
		return expect(promise).to.be.eventually.fulfilled;
	});

	it('should read option for the connector', () => {
		const promise = connectorsOptions.getOption(
			'youtube',
			'scrobbleMusicOnly'
		);
		return expect(promise).to.be.eventually.true;
	});

	it('should set another option for the connector', () => {
		const promise = connectorsOptions.setOption(
			'youtube',
			'scrobbleEntertainmentOnly',
			true
		);
		return expect(promise).to.be.eventually.fulfilled;
	});

	it('should read another option for the connector', () => {
		const promise = connectorsOptions.getOption(
			'youtube',
			'scrobbleEntertainmentOnly'
		);
		return expect(promise).to.be.eventually.true;
	});

	it('should read first option for the connector', () => {
		const promise = connectorsOptions.getOption(
			'youtube',
			'scrobbleMusicOnly'
		);
		return expect(promise).to.be.eventually.true;
	});
}

function createConnectorsOptions(): ConnectorsOptions<ConnectorsOptionsData> {
	return new ConnectorsOptionsImpl(new MockedStorage());
}