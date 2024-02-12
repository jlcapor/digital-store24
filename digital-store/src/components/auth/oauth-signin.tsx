"use client"
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface OAuthProvider {
  name: string;
  icon: keyof typeof Icons;
  id: string; // Assuming 'id' is used as the provider identifier
}

export function OAuthSignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const oauthProviders: OAuthProvider[] = [
    { name: 'Google', icon: 'google', id: 'google' },
  ];

  const oauthSignIn = async (providerId: string) => {
    setIsLoading(true)
    try {
      await signIn(providerId, { callbackUrl: '/' });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      )
    }finally {
      setTimeout(() => setIsLoading(false), 2500)
    }
  };

  return (
    // <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
    <div className="flex flex-col gap-4 mt-3">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon];

        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.id}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={isLoading ? undefined : () => void oauthSignIn(provider.id)}
            disabled={isLoading}
          >
            {isLoading ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            {provider.name}
          </Button>
        );
      })}
    </div>
  );
}
