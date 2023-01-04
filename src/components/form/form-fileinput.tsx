import React, { FC, DragEvent, useId, useState, useRef, ChangeEvent } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { Label, LabelSizes } from '../text/label';
import { FormItem } from './form-item';
import { IconUpload } from '../icons/icon-upload';
import { IconCheckmark } from '../icons/icon-checkmark';
import { IconSizes } from '../icons/icon-props';
import { Paragraph, ParagraphSizes } from '../text/paragraph';
import { TextButton, TextButtonColors, TextButtonSizes } from '../buttons/text-button';
import { Stack, StackAlignItems, StackDirections, StackSpacings } from '../../layout/stack/stack';

//Todo validate filesize and filetypes
export type FileinputProps = {
  title: string;
  description: string;
  errorMessage?: string;
  onAddFile: (file: File) => void;
};

export const Fileinput: FC<FileinputProps> = ({ title, description, errorMessage, onAddFile }) => {
  const fileinputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [currentFile, setCurrentFile] = useState('');

  // handle drag events
  const handleDrag = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setIsFileSelected(true);
      setCurrentFile(e.dataTransfer.files[0].name);
      onAddFile(e.dataTransfer.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setCurrentFile(e.target.files?.[0].name);
      setIsFileSelected(true);
      onAddFile(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    // Check if inputRef.current is not null for typescript
    inputRef.current?.click();
  };

  const dragAreaBaseStyle = [
    'text-slate-500',
    'w-full h-full',
    'rounded-lg border-2 border-dotted',
    'px-s py-xl mb-s bg-slate-100',
  ];
  dragActive && dragAreaBaseStyle.push('bg-slate-300');
  const dragAreaClasses = mergeClassNames([dragAreaBaseStyle]);

  return (
    <FormItem id={fileinputId} errorMessage={errorMessage}>
      <input className={'hidden'} type="file" ref={inputRef} id={fileinputId} multiple={false} onChange={handleChange} />
      <label htmlFor={fileinputId} className={dragAreaClasses}>
        <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
          <Stack direction={StackDirections.col} spacing={StackSpacings.xs} alignitems={StackAlignItems.center}>
            {!isFileSelected ? (
              <>
                <IconUpload size={IconSizes.l} />
                <Label size={LabelSizes.xl}>{title}</Label>
                <Paragraph size={ParagraphSizes.m}>{description}</Paragraph>
              </>
            ) : (
              <>
                <IconCheckmark size={IconSizes.l} />
                <Label size={LabelSizes.xl}>Datei geladen</Label>
                <Paragraph size={ParagraphSizes.m}>{`${currentFile} wurde hinzugefügt.`}</Paragraph>
              </>
            )}
          </Stack>
        </div>
      </label>
      {/* Textbutton mit Slate-300 existiert gem. Design System nicht, darum wurde der Textbutton-Slate gewählt. */}
      <TextButton color={TextButtonColors.slate} size={TextButtonSizes.m} onClick={onButtonClick} icon={<IconUpload />}>
        ...oder Datei auswählen
      </TextButton>
    </FormItem>
  );
};
