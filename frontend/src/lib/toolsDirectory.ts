import toolsDirectoryData from "@/data/tools-directory.json";
import benchmarksData from "@/data/benchmarks.json";

export type ProviderDomain = {
  slug: string;
  emoji: string;
  title: string;
  description: string;
};

export type Provider = {
  name: string;
  url: string;
  domain: string;
  description: string;
};

export type Benchmark = {
  name: string;
  url: string;
  organization: string;
  description: string;
  misst: string;
  updateFrequency: string;
};

export const providerDomains: ProviderDomain[] = toolsDirectoryData.domains;
export const providers: Provider[] = toolsDirectoryData.providers;
export const benchmarks: Benchmark[] = benchmarksData.benchmarks;

export function getProvidersByDomain(domainSlug: string): Provider[] {
  return providers.filter((p) => p.domain === domainSlug);
}
