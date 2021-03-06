/**
 * Copyright 2015-present 650 Industries. All rights reserved.
 *
 * @providesModule Platforms
 */
'use strict';

import { Platform } from 'react-native';

module.exports = {
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
}
