"use server";
import MainRepository from "@/actions/repositories/main";

export async function trackUrl(url: string): Promise<void> {
  try {
    await MainRepository.hitTrack(url);
    console.log(`Tracking hit for URL: ${url}`);
  } catch (error) {
    console.error(`Failed to track URL: ${url}`, error);
  }
}
