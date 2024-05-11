import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useFormContext } from 'react-hook-form'

interface Props {
  name: string
}

export const DatePicker = ({ name }: Props) => {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel>Data da consulta</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  {field.value ? (
                    format(field.value, 'dd/MM/yyyy', { locale: ptBR })
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                className="rounded-sm border border-gray-200 bg-white text-black"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date < new Date() || date < new Date('1900-01-01')
                }
                locale={ptBR}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
