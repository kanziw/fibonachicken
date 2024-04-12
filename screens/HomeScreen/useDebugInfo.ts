import * as Application from 'expo-application';
import { useEffect, useState } from 'react';

export const useDebugInfo = () => {
  const [debugInfo, setDebugInfo] = useState<Record<string, string | null>>({
    applicationId: Application.applicationId,
    applicationName: Application.applicationName,
    nativeApplicationVersion: Application.nativeApplicationVersion,
    nativeBuildVersion: Application.nativeBuildVersion,
  });

  useEffect(() => {
    let androidId: string | null = null;
    try {
      androidId = Application.getAndroidId();
    } catch (unknownErr) {
      androidId = 'err';
    }
    const moreDebugInfo: Record<string, string | null> = {
      androidId,
    };

    const parseDebugInfoAsync = async (p: Promise<string | null>, key: string) => {
      try {
        const result = await p;
        moreDebugInfo[key] = result;
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
    ]).then(() => setDebugInfo((prev) => ({ ...prev, ...moreDebugInfo })));
  }, []);

  return { debugInfo };
};
