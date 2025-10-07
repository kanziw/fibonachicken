import * as Application from 'expo-application';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import { useEffect, useState } from 'react';

export const useDebugInfo = () => {
  const [debugInfo, setDebugInfo] = useState<Record<string, string>>({
    gitShortSha: Constants.expoConfig?.extra?.git?.shortSha ?? 'unknown',
    gitCommitMsg: Constants.expoConfig?.extra?.git?.commitMsg ?? 'unknown',
    applicationId: Application.applicationId || 'none',
    applicationName: Application.applicationName || 'none',
    nativeApplicationVersion: Application.nativeApplicationVersion || 'none',
    nativeBuildVersion: Application.nativeBuildVersion || 'none',
    isRealDevice: Device.isDevice.toString(),
    brand: Device.brand || 'none',
    manufacturer: Device.manufacturer || 'none',
    modelId: Device.modelId || 'none',
    modelName: Device.modelName || 'none',
    designName: Device.designName || 'none',
    productName: Device.productName || 'none',
    deviceType: Device.deviceType !== null ? Device.DeviceType[Device.deviceType] : 'none',
    deviceYearClass: Device.deviceYearClass?.toString() || 'none',
    totalMemory: Device.totalMemory ? `${Device.totalMemory / 1024 / 1024} MB` : 'none',
    supportedCpuArchitectures: Device.supportedCpuArchitectures?.join(', ') || 'none',
    osName: Device.osName || 'none',
    osVersion: Device.osVersion || 'none',
    osBuildId: Device.osBuildId || 'none',
    osInternalBuildId: Device.osInternalBuildId || 'none',
    osBuildFingerprint: Device.osBuildFingerprint || 'none',
    platformApiLevel: Device.platformApiLevel?.toString() || 'none',
    deviceName: Device.deviceName || 'none',
  });

  useEffect(() => {
    let androidId: string | null = null;
    try {
      androidId = Application.getAndroidId();
    } catch (unknownErr) {
      androidId = 'err';
    }
    const moreDebugInfo: Record<string, string> = {
      androidId,
    };

    const parseDebugInfoAsync = async (p: Promise<string | null>, key: string) => {
      try {
        const result = await p;
        moreDebugInfo[key] = result || 'none';
      } catch (unknownErr) {
        moreDebugInfo[key] = 'err';
      }
    };

    Promise.all([
      parseDebugInfoAsync(Application.getIosIdForVendorAsync(), 'iosIdForVendor'),
      parseDebugInfoAsync(
        Application.getInstallationTimeAsync().then((date) => date.toISOString()),
        'installationTime',
      ),
      parseDebugInfoAsync(
        Application.getIosApplicationReleaseTypeAsync().then((t) => Application.ApplicationReleaseType[t]),
        'iosApplicationReleaseType',
      ),
      parseDebugInfoAsync(Application.getIosPushNotificationServiceEnvironmentAsync(), 'iosPushNotificationServiceEnvironment'),
      parseDebugInfoAsync(Application.getInstallReferrerAsync(), 'installReferrer'),
      parseDebugInfoAsync(
        Application.getLastUpdateTimeAsync().then((date) => date.toISOString()),
        'lastUpdateTime',
      ),
      parseDebugInfoAsync(
        Device.getDeviceTypeAsync().then((deviceType) => Device.DeviceType[deviceType]),
        'deviceType2',
      ),
      parseDebugInfoAsync(
        Device.getUptimeAsync().then((uptime) => `${uptime / 1000} sec`),
        'uptime',
      ),
      parseDebugInfoAsync(
        Device.getMaxMemoryAsync().then((maxMemory) => `${maxMemory / 1024 / 1024} MB`),
        'maxMemory',
      ),
      parseDebugInfoAsync(
        Device.isRootedExperimentalAsync().then((isRooted) => isRooted.toString()),
        'isRootedExperimental',
      ),
      parseDebugInfoAsync(
        Device.isSideLoadingEnabledAsync().then((isSideLoadingEnabled) => isSideLoadingEnabled.toString()),
        'isSideLoadingEnabled',
      ),
      parseDebugInfoAsync(
        Device.getPlatformFeaturesAsync().then((platformFeatures) => platformFeatures.join(', ')),
        'platformFeatures',
      ),
    ]).then(() => setDebugInfo((prev) => ({ ...prev, ...moreDebugInfo })));
  }, []);

  return { debugInfo };
};
